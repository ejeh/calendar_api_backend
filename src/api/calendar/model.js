// import mongoose, { Schema } from "mongoose";

// const ImageSchema = new Schema(
//   {
//     summary: { type: String },
//     location: { type: String },
//     description: { type: String },
//     start: {
//         type:String,
//         dateTime: "",
//         timeZone:""
//      },
//     end: { type: Date, dateTime:"", timeZone: "" },

//     fileId: { type: String },
//   },
//   {
//     timestamps: true,
//     toJSON: {
//       virtuals: true,
//       transform: (obj, ret) => {
//         delete ret._id;
//       },
//     },
//   }
// );

// ImageSchema.methods = {
//   view(full) {
//     const view = {
//       // simple view
//       name: this.name,
//       desc: this.desc,
//       filename: this.filename,
//       originalname: this.originalname,
//     };

//     return full
//       ? {
//           ...view,
//           createdAt: this.createdAt,
//           updatedAt: this.updatedAt,
//           updatedBy: this.updatedBy,
//         }
//       : view;
//   },
// };

// const Image = mongoose.model("Image", ImageSchema);

// export const { ObjectId } = mongoose.Types;
// export default Image;
