export const soulAbi = {
    'ABI version': 2,
    version: '2.2',
    header: ['pubkey', 'time', 'expire'],
    functions: [
        {
            name: 'constructor',
            inputs: [
                {name: 'firstOwnerPubKey', type: 'uint256'}
            ],
            outputs: []
        },
        {
            name: 'setVoteMinThreshold',
            inputs: [
                {name: 'threshold', type: 'uint256'}
            ],
            outputs: []
        },
        {
            name: 'addOwner',
            inputs: [
                {name: 'ownerPubKey', type: 'uint256'}
            ],
            outputs: []
        },
        {
            name: 'removeOwner',
            inputs: [
                {name: 'ownerPubKey', type: 'uint256'}
            ],
            outputs: []
        },
        {
            name: 'approveSbt',
            inputs: [
                {name: 'sbtAddress', type: 'address'},
                {name: 'approve', type: 'bool'}
            ],
            outputs: []
        },
        {
            name: '_owners',
            inputs: [],
            outputs: [
                {name: '_owners', type: 'map(uint256,bool)'}
            ]
        },
        {
            name: '_voteMinThreshold',
            inputs: [],
            outputs: [
                {name: '_voteMinThreshold', type: 'uint256'}
            ]
        },
        {
            name: '_approvedSbt',
            inputs: [],
            outputs: [
                {name: '_approvedSbt', type: 'map(address,bool)'}
            ]
        }
    ],
    data: [],
    events: [],
    fields: [
        {name: '_pubkey', type: 'uint256'},
        {name: '_timestamp', type: 'uint64'},
        {name: '_constructorFlag', type: 'bool'},
        {name: 'ONLY_OWNER_CAN_CALL_THIS_FUNCTION', type: 'uint256'},
        {name: '_owners', type: 'map(uint256,bool)'},
        {name: '_voteMinThreshold', type: 'uint256'},
        {name: '_approvedSbt', type: 'map(address,bool)'}
    ]
} as const;
