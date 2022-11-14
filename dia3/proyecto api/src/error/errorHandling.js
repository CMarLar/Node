function errorHandling (err,req,res,next)//no entiendo nada de este archivo
{
    res.status(500).json({mensage: err.message})
}

module.exports = errorHandling;