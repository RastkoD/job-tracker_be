require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const getAllJobs = async () => {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) throw new Error(error.message);
  return data;
};

module.exports = { getAllJobs };
