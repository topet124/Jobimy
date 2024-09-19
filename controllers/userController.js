import User from '../models/UserModel.js';
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    // Check if the user exists
    if (!user) {
      // Handle the case where the user is not found
      return res.status(404).json({ msg: 'User not found' });
    }

    // Only call toJSON if the user exists
    res.status(200).json({ user: user.toJSON() });
  } catch (error) {
    next(error);
  }
};
