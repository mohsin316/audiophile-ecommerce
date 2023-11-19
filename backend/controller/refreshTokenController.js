const { supabase } = require("../config/supabaseCreateClient");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(401); //unauthorized
  }
  const refresh_token = cookies.jwt;
  const { data, error } = await supabase.auth.refreshSession({ refresh_token });

  if (error) {
    return res.sendStatus(403); //forbidden
  }

  const { session } = data;
  res.json({ accessToken: session.access_token });
};

module.exports = { handleRefreshToken };
