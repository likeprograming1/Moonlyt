use starknet::{ContractAddress, ClassHash};
use moonlyt::moonlyt_pool::MoonlytPool::targetOption;

#[starknet::interface]
trait IMoonlytPoolFactory<TContractState> {
    fn createMoonlytPool(ref self: TContractState, savingsTarget: targetOption, targetDetails: u128) -> ContractAddress;
    fn updateMoonlytPoolHash(ref self: TContractState, newClasHash: ClassHash);
    fn getAllMoonlytPool(self: @TContractState) -> Array<ContractAddress>;
    fn getMoonlytPoolsNumber(self: @TContractState) -> u128;
    fn getMoonlytPoolAddr(self: @TContractState, userAddress: ContractAddress) -> ContractAddress;
    fn get_owner(self: @TContractState) -> ContractAddress;
    fn get_childClassHash(self: @TContractState) -> ClassHash;
}

#[starknet::contract]
mod moonlytFactory{
    use core::starknet::event::EventEmitter;
use moonlyt::ownership_component::IOwnable;
    use core::serde::Serde;
    use starknet::{ContractAddress, ClassHash, get_caller_address, Zeroable};
    use starknet::syscalls::deploy_syscall;
    use super::targetOption;
    use moonlyt::ownership_component::ownable_component;
    component!(path: ownable_component, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    impl OwnableImpl = ownable_component::Ownable<ContractState>;
    impl OwnableInternalImpl = ownable_component::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        MoonlytPoolHash: ClassHash,
        totalMoonlytPoolsNo: u128,
        AllPoolsRecords: LegacyMap<u128, ContractAddress>,
        MoonlytPoolOwner: LegacyMap::<ContractAddress, ContractAddress>,
        TokenAddr: ContractAddress,
        #[substorage(v0)]
        ownable: ownable_component::Storage
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        PoolCreated: PoolCreated,
        HashUpdated: HashUpdated,
        OwnableEvent: ownable_component::Event
    }

    #[derive(Drop, starknet::Event)]
    struct PoolCreated {
        #[key]
        for: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    struct HashUpdated {
        #[key]
        by: ContractAddress,
        #[key]
        oldHash: ClassHash,
        #[key]
        newHash: ClassHash,
    }

    mod Errors {
        const Address_Zero_Owner: felt252 = 'Invalid owner';
    }

    #[constructor]
    fn constructor(ref self: ContractState, MoonlytPoolClassHash: ClassHash, tokenAddr: ContractAddress,  _owner: ContractAddress) {
        self.MoonlytPoolHash.write(MoonlytPoolClassHash);
        self.ownable.owner.write(_owner);
        self.TokenAddr.write(tokenAddr);
    }

    #[external(v0)]
    impl moonlytFactoryImpl of super::IMoonlytPoolFactory<ContractState> {
        fn createMoonlytPool(ref self: ContractState, savingsTarget: targetOption, targetDetails: u128) -> ContractAddress {
            let mut constructor_calldata = ArrayTrait::new();
            get_caller_address().serialize(ref constructor_calldata);
            self.TokenAddr.read().serialize(ref constructor_calldata);
            self.ownable.owner().serialize(ref constructor_calldata);
            savingsTarget.serialize(ref constructor_calldata);
            targetDetails.serialize(ref constructor_calldata);

            let (deployed_address, _) = deploy_syscall(
                self.MoonlytPoolHash.read(), 0, constructor_calldata.span(), false
            )
                .expect('failed to deploy counter');
            self.totalMoonlytPoolsNo.write(self.totalMoonlytPoolsNo.read() + 1);
            self.AllPoolsRecords.write(self.totalMoonlytPoolsNo.read(), deployed_address);
            self.MoonlytPoolOwner.write(get_caller_address(), deployed_address);
            self.emit(PoolCreated{for: get_caller_address()});

            deployed_address
        }

        fn updateMoonlytPoolHash(ref self: ContractState, newClasHash: ClassHash) {
            self.ownable.assert_only_owner();
            self.MoonlytPoolHash.write(newClasHash);
            self.emit(HashUpdated{by: self.ownable.owner(), oldHash: self.MoonlytPoolHash.read(), newHash: newClasHash});
        }

        fn getAllMoonlytPool(self: @ContractState) -> Array<ContractAddress> {
            let mut MoonlytPoolsAddress = ArrayTrait::new();
            let mut i: u128  = 1;
            loop {
                if i > self.totalMoonlytPoolsNo.read() {
                    break;
                }
                MoonlytPoolsAddress.append(self.AllPoolsRecords.read(i));
                i += 1;
            };
            MoonlytPoolsAddress
        }

        fn getMoonlytPoolsNumber(self: @ContractState) -> u128 {
            self.totalMoonlytPoolsNo.read()
        }
        fn getMoonlytPoolAddr(self: @ContractState, userAddress: ContractAddress) -> ContractAddress {
            assert(!userAddress.is_zero(), Errors::Address_Zero_Owner);
            self.MoonlytPoolOwner.read(userAddress)
        }
        fn get_owner(self: @ContractState) -> ContractAddress {
            self.ownable.owner()
        }

        fn get_childClassHash(self: @ContractState) -> ClassHash {
            self.MoonlytPoolHash.read()
        }

    }

}