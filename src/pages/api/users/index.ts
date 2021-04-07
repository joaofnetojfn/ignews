import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

    const users = [
        {id:1, name: 'João'},
        {id:2, name: 'Michel'},
        {id:3, name: 'Dani'},
    ]

    return response.json(users);
}