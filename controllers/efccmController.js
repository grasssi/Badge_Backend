const Effcm = require('../models/efccmSchema');

// get all users
exports.allEffcms = async (req, res) => {
    try {
        const users = await Effcm.find({});
        res.json(users);
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
            code_payes:req.body.code_payes,
            idf_emt:req.body.idt_emt,
            toc:req.body.toc,
            vcontext:req.body.vcontext,
            code_efccm:req.body.code_payes + req.body.idf_emt + req.body.vcontext +'2TOC       0                                0  0  111115',
            code_toc:req.body.code_payes +this.toc + req.body.idf_emt + req.body.vcontext +'NONNN0O 01320000000020200100 1333100'
        })
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
        req.body.password=hashedPwd;
        const updatedEffcm = await Effcm.findByIdAndUpdate(req.params.id,req.body)
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
exports.getEffcm = async (req, res) => {
    try {
        //hash password
        const getUser = await Effcm.findById(req.params.id)
        res.json(getEffcm);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}