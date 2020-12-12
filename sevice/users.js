const User = require('../model/users');

module.exports = class UsersService {
    async findAll(txn) {

        const details = await User.query(txn)
        console.log(details, 'details');
        return details
    }

    async create(details) {
        const detail = await User.query().insertGraph(details);
        return detail;
    }

    async findById(userId) {
        const detail = await User.query().findById(userId)
        if (detail !== undefined) {
            return detail
        }
        return ({ "sorry": `userId ${userId} is not found` })
    }

    async userUpdate(id, details) {

        console.log(details, id);
        const updatedDetails = await User.query().findById(id).patch(details)
        return updatedDetails;

    }

    async deleteById(userId) {
        const deleteUser = await User.query().deleteById(userId)
        return deleteUser;
    }
}