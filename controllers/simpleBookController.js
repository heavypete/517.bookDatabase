import SimpleBookModel from "../models/simpleBookModel.js";

export const getAllBooks = async () => {
  return await SimpleBookModel.find({});
};

export const createSimpleBook = async (simpleBookObj) => {
  const simpleBook = new SimpleBookModel(simpleBookObj);
  return simpleBook.save();
};

export const deleteSimpleBook = async (id) => {
  return await SimpleBookModel.findByIdAndRemove(id);
};

export const updateSimpleBook = async (id, updateFields) => {
  return await SimpleBookModel.findByIdAndUpdate(id, updateFields, {
    new: true,
  });
};
