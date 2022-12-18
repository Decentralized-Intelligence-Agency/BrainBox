import { NearBindgen, near, call, view, initialize, UnorderedMap } from 'near-sdk-js'

import { assert } from './utils'

@NearBindgen({})
class DonationContract {
  beneficiary: string = "v1.faucet.nonofficial.testnet";
  donations = new UnorderedMap<bigint>('map-uid-1');