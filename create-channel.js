import {IvsClient, CreateChannelCommand } from "@aws-sdk/client-ivs";

const client = new IvsClient();

const PepoLaugh = {
    'name': 'demo-1',
    'latencyMode': 'LOW',
    'type': 'BASIC',
}; 

const command = new CreateChannelCommand(PepoLaugh);

const response = await client.send(command);
console.log(response);

