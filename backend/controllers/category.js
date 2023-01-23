const {Category} = require('../models')

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      
    })
    res.status(200).json({
      message: 'success',
      data: categories
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getCategories
}