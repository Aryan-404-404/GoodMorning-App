const pool = require("../config/connectDB");

const submitUser = async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    const queryText =
      "INSERT INTO users (name, phone, email) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, phone, email];

    const result = await pool.query(queryText, values);

    res.status(201).json({
      success: true,
      message: "Good Morning! Data stored.",
      data: result.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Database insertion failed" });
  }
};

module.exports = { submitUser };
