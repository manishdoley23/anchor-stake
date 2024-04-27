use anchor_lang::prelude::*;

declare_id!("GpJ45EtdnvBxETx3kX5afhjq1Qs7tmnRExp8Zf734mK7");

#[program]
pub mod staking_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
