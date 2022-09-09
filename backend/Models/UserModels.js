const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      text: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      text: true,
      trim: true,
    },
    userName: {
      type: String,
      required: [true, "User Name is required"],
      text: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      text: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    picture: {
      type: String,
      default: "",
      trim: true,
    },
    cover: {
      type: String,
      default: "",
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
    },
    birthYear: {
      type: Number,
      required: [true, "Birth Year is required"],
      trim: true,
    },
    birthMonth: {
      type: Number,
      required: [true, "Birth Month is required"],
      trim: true,
    },
    birthDay: {
      type: Number,
      required: [true, "Birth Day is required"],
      trim: true,
    },
    varified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    request: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],

    details: {
      bio: {
        type: String,
      },
      othersName: {
        type: String,
      },
      work: {
        type: String,
      },
      workPlace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      College: {
        type: String,
      },
      university: {
        type: String,
      },
      religious: {
        type: String,
        enum: ["Islam", "Hindu", "Cristan"],
      },
      relationship: {
        type: String,
        enum: [
          "Single",
          "In a RelationShip",
          "Married",
          "In an Open RelationShip",
        ],
      },
      currentCity: {
        type: String,
      },
      homeTown: {
        type: String,
      },
    },

    savePost: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
        saveAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
