import { Reclaim } from '@reclaimprotocol/js-sdk'
process.env.RECALIM_APP
const { ReclaimClient } = require("@reclaimprotocol/zk-fetch");

export default function ZkFetch() {


    const APP_ID = "RECLAIM_APP";
    const ReclaimClient = new Reclaim.ProofRequest(APP_ID);

    return(
        <>
        </>
    )
}