const DELETE_ITEM = "DELETE_ITEM";

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
