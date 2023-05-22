const Badge = require('../models/badgeSchema');

// get all users
exports.allBadges = async (req, res) => {
    try {
        const users = await Badge.find({});
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//add one user(not used)
exports.addBadge = async (req, res) => {
    try {
        //hash password
        //console.log('coy',req.body.modele);

        const createdBadge = await Badge.create
        ({
            emt : req.body.emt,
            modele : req.body.modele,
            code_fab : req.body.code_fab,
            classe_equipement:req.body.classe_equipement,
            codage:req.body.code_fab + req.body.classe_equipement + '100000'
        })
        res.json(createdBadge);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update user by id
exports.updateBadge = async (req, res) => {
    try {
        //hash password
        //const hashedPwd = await bcrypt.hash(req.body.password, 10);
        req.body.password=hashedPwd;
        const updatedBadge = await Badge.findByIdAndUpdate(req.params.id,req.body)
        res.json(updatedBadge);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// remove user by id
exports.removeBadge = async (req, res) => {
    try {
        const deletedBadge = await Badge.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted user successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//get one user by id
exports.getBadge = async (req, res) => {
    try {
        //hash password
        const getUser = await Badge.findById(req.params.id)
        res.json(getBadge);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
