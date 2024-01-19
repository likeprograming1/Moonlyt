use starknet::{
    ContractAddress, get_caller_address, assert
};

#[starknet::interface]
trait IERC721 {
    fn get_name(self: @ContractState) -> felt252;
    fn get_symbol(self: @ContractState) -> felt252;
    fn owner_of(self: @ContractState, token_id: u256) -> ContractAddress;
    fn balance_of(self: @ContractState, account: ContractAddress) -> u256;
    
    fn approve(ref self: ContractState, to: ContractAddress, token_id: u256);
    fn set_approval_for_all(ref self: ContractState, operator: ContractAddress, approved: bool);
    fn get_approved(self: @ContractState, token_id: u256) -> ContractAddress;
    fn is_approved_for_all(self: @ContractState, owner: ContractAddress, operator: ContractAddress) -> bool;
    
    fn mint(ref self: ContractState, to: ContractAddress, token_id: u256);
    fn burn(ref self: ContractState, token_id: u256);
    fn transfer_from(ref self: ContractState, from: ContractAddress, to: ContractAddress, token_id: u256); 
}

#[starknet::contract]
mod MoonlytNft {
    use starknet::{
        ContractAddress, get_caller_address, Zeroable, assert
    };
    use dict::Dict;
    use super::IERC721;

    #[storage]
    struct Storage {
        token_owners: Dict<u256, ContractAddress>,
        token_approvals: Dict<u256, ContractAddress>,
        owner_balances: Dict<ContractAddress, u256>,
        name: felt252,
        symbol: felt252,
    }

    #[constructor]
    fn constructor(ref self: ContractState, name: felt252, symbol: felt252) {
        self.name.write(name);
        self.symbol.write(symbol);
    }

    #[external(v0)]
    impl IERC721Impl of IERC721<ContractState> {
        fn get_name(self: @ContractState) -> felt252 {
            self.name.read()
        }

        fn get_symbol(self: @ContractState) -> felt252 {
            self.symbol.read()
        }

        fn owner_of(self: @ContractState, token_id: u256) -> ContractAddress {
            self.token_owners.read(token_id).unwrap_or(Zeroable::zero())
        }

        fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
            self.owner_balances.read(account).unwrap_or(Zeroable::zero())
        }

        fn approve(ref self: ContractState, to: ContractAddress, token_id: u256) {
            let owner = self.owner_of(token_id);
            assert(get_caller_address() == owner, 'Not owner of token');
            self.token_approvals.write(token_id, to);
        }

        fn set_approval_for_all(ref self: ContractState, operator: ContractAddress, approved: bool) {
        }

        fn get_approved(self: @ContractState, token_id: u256) -> ContractAddress {
            self.token_approvals.read(token_id).unwrap_or(Zeroable::zero())
        }

        fn is_approved_for_all(self: @ContractState, owner: ContractAddress, operator: ContractAddress) -> bool {
        }

        fn mint(ref self: ContractState, to: ContractAddress, token_id: u256) {
            assert(self.owner_of(token_id).is_zero(), 'Token already minted');
            self.token_owners.write(token_id, to);
            self.owner_balances.increment(to, 1);
        }

        fn burn(ref self: ContractState, token_id: u256) {
            let owner = self.owner_of(token_id);
            assert(owner.is_non_zero(), 'Token does not exist');
            self.token_owners.write(token_id, Zeroable::zero());
            self.owner_balances.decrement(owner, 1);
        }

        fn transfer_from(ref self: ContractState, from: ContractAddress, to: ContractAddress, token_id: u256) {
            let owner = self.owner_of(token_id);
            assert(owner == from, 'Not owner of token');
            self.token_owners.write(token_id, to);
            self.owner_balances.decrement(from, 1);
            self.owner_balances.increment(to, 1);
        }
    }
}