const UserModel = require('./User');


const getUsers = () =>
{
    return new Promise((resolve, reject) =>
    {
        UserModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        });
    })
}

const getUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        UserModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        });
    })
}


const addUser = (obj) =>
{
    return new Promise((resolve, reject) =>
    {

        let user = new UserModel({
            firstName : obj.firstName,
            lastName : obj.lastName,   
            phoneNumber: obj.phoneNumber
            
            

        });

        user.save( function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Created");
            }
        });
    })
}




const updateUser = (id,obj) =>
{
    return new Promise((resolve, reject) =>
    {

        UserModel.findByIdAndUpdate(id, {
            firstName : obj.firstName,
            lastName : obj.lastName,   
            phoneNumber: obj.phoneNumber
        }, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Updated");
            }
        })

    })
}


const deleteUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {

        UserModel.findByIdAndDelete(id, function (err)
        {
            if (err) {
                reject(err)
            }
            else {
                resolve('Deleted');
            }
        });

    })
}


module.exports = { getUsers, getUser, addUser, deleteUser, updateUser }