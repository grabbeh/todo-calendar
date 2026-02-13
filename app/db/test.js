import { GetItemCommand } from 'dynamodb-toolbox/entity/actions/get'
import { User } from './table.server.ts'

try {
const { Item } = await User.build(GetItemCommand).key({
        email,
        sk: email
    }).send()
    console.log("fetchUser")
    console.log(Item)
    

    } catch (e){
        console.log(e)
    }
    
