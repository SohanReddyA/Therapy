var fs = require('fs');
let users = require('lib/users.json');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } =  JSON.parse(req.body);
        const found = users.some(el => el.email === email);
        if(!found) {
            const newUser = {
                email : email,
                password : password,
            }
            users.push(newUser)
            fs.writeFileSync('lib/users.json', JSON.stringify(users))
            res.status(201).json(newUser)
        }
        else if(found) {
            res.status(400).json({message:"Already Existing User, Please Login"})
        }
       
    }

    else if(req.method ==='GET') {
        const { email, password } = req.query;
        console.log(users[0].email)
        console.log(email)
        const found = users.some(el => ((el.email === email) && (el.password === password)));
        console.log(found)
        if(found) {
            res.status(201).json({message:"Successful Login"})
        }
        else if(!found){
        res.status(405).json({message:"Invalid Credentials"})
        }
    }
}