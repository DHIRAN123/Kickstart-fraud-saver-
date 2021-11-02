import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
'0x6092B511fc608c4B071384d7DBBaD8bE34D6Df39'
);

export default instance;
