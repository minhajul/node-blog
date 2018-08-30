exports.home = async (req, res) => {
    res.json({
        status: 'success',
        message: 'Welcome to my world!',
    })
};