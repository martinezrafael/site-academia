async function status(req, res) {
  res.status(200).json({
    message: "Chegamos até aqui",
  });
}

export default status;
