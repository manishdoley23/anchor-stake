import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { StakingProgram } from "../target/types/staking_program";
import { Connection } from "@solana/web3.js";

describe("staking-program", () => {
    // Configure the client to use the local cluster.
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    const payer = provider.wallet as anchor.Wallet;
    const connection = new Connection("http://127.0.0.1:8899", "confirmed");

    const program = anchor.workspace.StakingProgram as Program<StakingProgram>;

    it("Is initialized!", async () => {
        // Add your test here.
        const tx = await program.methods.initialize().rpc();
        console.log("Your transaction signature", tx);
    });
});
