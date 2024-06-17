module sui_pool::bank_pool {
  // === Imports ===

  use sui::sui::SUI;
  use sui::transfer;
  use sui::coin::{Self, Coin};
  use sui::object::{Self, UID};
  use sui::balance::{Self, Balance};
  use sui::tx_context::{Self, TxContext};
  use std::debug;
  



  // === Structs ===

  struct LiquidityPool has key {
    id: UID,
    balance: Balance<SUI>,
    total_supply: u64,
  }

  struct Account has key, store {
    id: UID,
    balance: u64
  }


struct Vote {
    voter: address,
    weight: u64,
    choice: bool, // true for approval, false for rejection
}

  // === Init ===

  fun init(ctx: &mut TxContext) {
    transfer::share_object(
        LiquidityPool {
            id: object::new(ctx),
            total_supply:  0,
             balance: balance::zero(),
        
        }
    );

  }  

  // === Deposite Logic ===


public fun deposit_to_pool(pool: &mut LiquidityPool, /* account: &mut Account */ token: Coin<SUI>, ctx: &mut TxContext) {
 
  balance::join(&mut pool.balance, coin::into_balance(token));

    }  
 
public fun withdraw_from_pool(pool: &mut LiquidityPool, amount: u64, ctx: &mut TxContext) {
   
  // Use the `take` function to withdraw the specified amount from the pool's balance
  let coins_withdrawn = coin::take(&mut pool.balance, amount, ctx);
  transfer::public_transfer(coins_withdrawn, tx_context::sender(ctx))

}
  // === Voting Logic ===

public fun cast_vote(pool: &mut LiquidityPool, voter: address, weight: u64, choice: bool, ctx: &mut TxContext) {
   
  }
   

}
