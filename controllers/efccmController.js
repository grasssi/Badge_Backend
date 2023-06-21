const Effcm = require('../models/efccmSchema');
const Badge = require('../models/badgeSchema');


// get all users
exports.allEffcms = async (req, res) => {
    try {
        const users = await Effcm.find({}).populate('badge');
        res.json(users);
        console.log('res', users)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//add one user(not used)
exports.addEffcm = async (req, res) => {
    try {
        //hash password
        // console.log('coy',req.body.modele);

        const createdEffcm = await Effcm.create

            ({
                code_payes: req.body.code_payes,
                idf_emt: req.body.idf_emt,
                toc: req.body.toc,
                vcontext: req.body.vcontext,
                code_efccm: req.body.code_payes + req.body.idf_emt + req.body.vcontext + '2TOC 0       0       0       111115',
                code_toc: req.body.code_payes + req.body.toc + req.body.idf_emt + req.body.vcontext + 'NON10O003400000NN0O 01320000000020200100                        1333100',
                badge: req.body.badge

            })
        const updatedBadge = await Badge.findByIdAndUpdate(req.body.badge, { $push: { efccm: createdEffcm._id } }, { new: true })


        res.json(createdEffcm);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update user by id
exports.updateEffcm = async (req, res) => {
    try {
        //hash password
        //const hashedPwd = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPwd;
        const updatedEffcm = await Effcm.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedEffcm);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// remove user by id
exports.removeEffcm = async (req, res) => {
    try {
        const deletedEffcm = await Effcm.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted user successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//get one user by id
exports.getEffcmbyid = async (req, res) => {
    try {
        //hash password
        const getEffcmbyid = await Effcm.findById(req.params.id)
        res.json(getEffcmbyid);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.foundEffcm = async (req, res) => {
    try {

        if (req.body.table == 'efccm') {
            const getEfccm = await Effcm.findOne({ code_efccm: { $regex: req.body.efccm.substr(0, 15) } }).exec();
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
            const getEfccm = await Effcm.find({ code_toc: { $regex: toc } }).exec();
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