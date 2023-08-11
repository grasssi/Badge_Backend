const Parking = require('../models/parkingSchema');
const Badge = require('../models/badgeSchema');


// get all users
exports.allParkings = async (req, res) => {
    try {
        const users = await Parking.find({}).populate('efccm');
        res.json(users);
        console.log('res', users)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}


exports.allBadges = async (req, res) => {
    try {
        const users = await Parking.find({}).populate('efccm', 'badge');
        res.json(users);
        console.log('res', users)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}


//add one user(not used)
exports.addParking = async (req, res) => {
    try {
        //hash password
        // console.log('coy',req.body.modele);

        const createdParking = await Parking.create

            ({
                nom : req.body.nom,
                badge: req.body.efccm

            })

        res.json(createdParking);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update user by id
exports.updateParking = async (req, res) => {
    try {
        //hash password
        //const hashedPwd = await bcrypt.hash(req.body.password, 10);
        //req.body.password = hashedPwd;
        //const updatedParking2 = await Parking.findById(req.params.id)
       // console.log('updatedParking2',updatedParking2);
        //res.json(updatedParking2);
        //req.body('efccm').push(efccm)
    //    updatedParking2.efccm.push(req.body)
    //    console.log('test',req.body.efccm);
        const updatedParking = await Parking.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedParking);
        //Parking.close();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// remove user by id
exports.removeParking = async (req, res) => {
    try {
        const deletedParking = await Parking.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted user successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//get one user by id
exports.getParkingbyid = async (req, res) => {
    try {
        //hash password
        const getParkingbyid = await Parking.findById(req.params.id)
        res.json(getParkingbyid);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.foundParking = async (req, res) => {
    try {

        if (req.body.table == 'efccm') {
            const getEfccm = await Parking.findOne({ code_efccm: { $regex: req.body.efccm.substr(0, 15) } }).exec();
            if (getEfccm) {
                const getBadge = await Badge.findOne({ efccm: getEfccm._id }).exec();
                res.json(getBadge);

            }
            else {
                res.json("not found");

            }

        } else if (req.body.table == 'TOC') {
            const getBadge=[]
            // console.log("efccm", req.body.efccm);
            // console.log("toc", req.body.table);
            const toc = req.body.efccm.substr(0, 35);
            // console.log('oldtoc', req.body.efccm);
            // console.log('newtoc', toc);
            const getEfccm = await Parking.find({ code_toc: { $regex: toc } }).exec();
            // console.log('taille',getEfccm.length);
            for (let i = 0; i < getEfccm.length; i++) {
                if (getEfccm) {
                    getBadge[i] = await Badge.find({ efccm: getEfccm[i]._id }).exec();
                    console.log('getbadge', getBadge);
                }
                else {
                    getBadge[i] = 'not found';

                }
            }
            res.json(getBadge);

        } else if (req.body.table == 'badge') {
            const toc = req.body.efccm.substr(0, 10);
            console.log('oldtoc', req.body.efccm);
            console.log('newtoc', toc);
            const getEfccm = await Badge.findOne({ code_efccm: { $regex: toc } }).exec();
            //console.log('badges222', getEfccm);
            if (getEfccm) {
                res.json(getEfccm);
            }
            else {
                res.json("not found");

            }

        };




    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}