function requireAuth(req, res, next) {
  if (!req.session.user) {
    req.session.errorMessage = "Please log in to continue.";
    return res.redirect("/login");
  }

  next();
}

function requireSeller(req, res, next) {
  if (!req.session.user || req.session.user.role !== "seller") {
    req.session.errorMessage = "Only sellers can perform this action.";
    return res.redirect("/dashboard");
  }

  next();
}

module.exports = {
  requireAuth,
  requireSeller
};
