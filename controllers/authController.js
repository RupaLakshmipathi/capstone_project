const bcrypt = require("bcrypt");

const User = require("../models/User");
const Product = require("../models/Product");

function renderHome(req, res) {
  res.render("home", {
    title: "SakhiSell"
  });
}

function renderSignup(req, res) {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }

  res.render("signup", {
    title: "Sign Up"
  });
}

async function signup(req, res) {
  try {
    const { name, email, password, role } = req.body;
    const normalizedEmail = email ? email.trim().toLowerCase() : "";

    if (!name || !normalizedEmail || !password || !role) {
      req.session.errorMessage = "All signup fields are required.";
      return res.redirect("/signup");
    }

    if (!["buyer", "seller"].includes(role.toLowerCase())) {
      req.session.errorMessage = "Please choose a valid role.";
      return res.redirect("/signup");
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      req.session.errorMessage = "Email is already registered. Please use another email.";
      return res.redirect("/signup");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      role: role.toLowerCase()
    });

    req.session.successMessage = "Signup successful. You can now log in.";
    res.redirect("/login");
  } catch (error) {
    console.error("Signup error:", error.message);
    req.session.errorMessage = "Something went wrong while creating your account.";
    res.redirect("/signup");
  }
}

function renderLogin(req, res) {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }

  res.render("login", {
    title: "Login"
  });
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email ? email.trim().toLowerCase() : "";

    if (!normalizedEmail || !password) {
      req.session.errorMessage = "Email and password are required.";
      return res.redirect("/login");
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      req.session.errorMessage = "Invalid email or password.";
      return res.redirect("/login");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      req.session.errorMessage = "Invalid email or password.";
      return res.redirect("/login");
    }

    req.session.user = {
      id: String(user._id),
      name: user.name,
      email: user.email,
      role: user.role
    };

    req.session.successMessage = `Welcome back, ${user.name}!`;
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Login error:", error.message);
    req.session.errorMessage = "Could not log you in. Please try again.";
    res.redirect("/login");
  }
}

function logout(req, res) {
  req.session.destroy((error) => {
    if (error) {
      console.error("Logout error:", error.message);
      return res.status(500).send("Unable to log out right now.");
    }

    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
}

async function dashboard(req, res) {
  try {
    const user = req.session.user;

    let sellerProducts = [];
    let recentProducts = [];

    if (user.role === "seller") {
      sellerProducts = await Product.find({ sellerId: user.id })
        .sort({ createdAt: -1 })
        .lean();
    } else {
      recentProducts = await Product.find({})
        .sort({ createdAt: -1 })
        .limit(8)
        .populate("sellerId", "name")
        .lean();
    }

    res.render("dashboard", {
      title: "Dashboard",
      user,
      sellerProducts,
      recentProducts
    });
  } catch (error) {
    console.error("Dashboard error:", error.message);
    req.session.errorMessage = "Unable to load dashboard.";
    res.redirect("/");
  }
}

module.exports = {
  renderHome,
  renderSignup,
  signup,
  renderLogin,
  login,
  logout,
  dashboard
};
