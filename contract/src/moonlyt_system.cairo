use starknet::{
    ContractAddress, get_caller_address
};

#[starknet::interface]
trait VoteTrait<T> {
    fn get_vote_status(self: @T) -> (u8, u8, u8, u8);
    fn can_vote(self: @T, token_id: u256) -> bool;
    fn vote(ref self: T, vote: u8, token_id: u256);
}

#[starknet::contract]
mod Vote {
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use moonlyt::moonlyt_nft::MoonlytNFT;

    const YES: u8 = 1_u8;
    const NO: u8 = 0_u8;

    #[storage]
    struct Storage {
        yes_votes: u8,
        no_votes: u8,
        nft_contract: ContractAddress,
        voted: LegacyMap::<u256, bool>,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        nft_contract: ContractAddress
    ) {
        self.nft_contract.write(nft_contract);
        self.yes_votes.write(0_u8);
        self.no_votes.write(0_u8);
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        VoteCast: VoteCast,
        UnauthorizedAttempt: UnauthorizedAttempt,
    }

    #[derive(Drop, starknet::Event)]
    struct VoteCast {
        voter: ContractAddress,
        vote: u8,
    }

    #[derive(Drop, starknet::Event)]
    struct UnauthorizedAttempt {
        unauthorized_tokenId: u256,
    }

    #[abi(embed_v0)]
    impl VoteImpl of super::VoteTrait<ContractState> {
        fn get_vote_status(self: @ContractState) -> (u8, u8, u8, u8) {
            let (n_yes, n_no) = self._get_voting_result();
            let (yes_percentage, no_percentage) = self._get_voting_result_in_percentage();
            (n_yes, n_no, yes_percentage, no_percentage)
        }

        fn can_vote(self: @ContractState, token_id: u256) -> bool {
            let has_voted = self.voted.read(token_id);
            let nft_owner = MoonlytNFT::ExternalImpl::get_owner(token_id);
            nft_owner == get_caller_address() && !has_voted
        }

        fn vote(ref self: ContractState, vote: u8, token_id: u256) {
            assert!(vote == NO || vote == YES, "VOTE_0_OR_1");
            assert!(self.can_vote(token_id), "NOT_ELIGIBLE_OR_ALREADY_VOTED");
            self.voted.write(token_id, true);

            if vote == YES {
                self.yes_votes.write(self.yes_votes.read() + 1_u8);
            } else if vote == NO {
                self.no_votes.write(self.no_votes.read() + 1_u8);
            }

            self.emit(VoteCast { voter: get_caller_address(), vote: vote, });
        }
    }

    #[generate_trait]
    impl AssertsImpl of AssertsTrait {
        fn _assert_allowed(ref self: ContractState, tokenId: u256) {
            let can_vote: bool = self.can_vote(tokenId);

            if (can_vote == false) {
                self.emit(UnauthorizedAttempt { unauthorized_tokenId: tokenId, });
            }

            assert!(can_vote == true, "USER_ALREADY_VOTED");
        }
    }

    #[generate_trait]
    impl VoteResultFunctionsImpl of VoteResultFunctionsTrait {
        fn _get_voting_result(self: @ContractState) -> (u8, u8) {
            let n_yes: u8 = self.yes_votes.read();
            let n_no: u8 = self.no_votes.read();

            (n_yes, n_no)
        }

        fn _get_voting_result_in_percentage(self: @ContractState) -> (u8, u8) {
            let n_yes: u8 = self.yes_votes.read();
            let n_no: u8 = self.no_votes.read();

            let total_votes: u8 = n_yes + n_no;

            if (total_votes == 0_u8) {
                return (0, 0);
            }
            let yes_percentage: u8 = (n_yes * 100_u8) / (total_votes);
            let no_percentage: u8 = (n_no * 100_u8) / (total_votes);

            (yes_percentage, no_percentage)
        }
    }
}