

export default async (req, res) => {
  try {
    
    res.json({hello: 'world'})
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500)
    res.json(error.data)
  }
}
