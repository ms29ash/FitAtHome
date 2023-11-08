import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../auth/authSlice";
import { fetchUserData } from "../auth/userDataSlice";
import axios from "../../axios";
import Cookies from "universal-cookie";

const initialState = {
  favorites: [],
  address: {
    defaultAddress: {},
    addresses: [],
  },
};

export const getFavIndex = (list, idToFind) => {
  const index = list.findIndex((item) => item._id === idToFind);
  return index;
};

const cookies = new Cookies();
const token = cookies.get("authToken");
const headers = {
  authorization: `Bearer ${token}`,
};

//Set Default
export const setDefault = createAsyncThunk(
  "address/setDefault",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        "userData/address/setDefault",
        {
          defaultAddress: data.defaultAddress,
        },
        { headers }
      );
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//Add Address
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "userData/address/add",
        {
          address: data.address,
        },
        { headers }
      );
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//Update Address
export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        "userData/address/update",
        {
          address: data.address,
          update: data?.updatedItem,
        },
        { headers }
      );
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//Delete Address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (data, { rejectWithValue }) => {
    try {
      console.log(headers);
      if (headers) {
        const res = await axios.delete(
          `userData/address/remove/${data.address}`,
          { headers }
        );
        return res?.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const itemIndex = getFavIndex(state.favorites, action.payload._id);
      if (itemIndex < 0) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      const itemIndex = getFavIndex(state.favorites, action.payload._id);
      if (itemIndex > -1) {
        state.favorites.splice(itemIndex, 1);
      }
    },
    removeFavId: (state, action) => {
      if (action.payload > -1) {
        state.favorites.splice(action.payload, 1);
      }
    },
    resetList: (state, action) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser, (state) => {
        state.favorites = [];
        state.address = {};
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        const { userData } = action.payload?.user;
        state.address.addresses = userData.address;
        state.address.defaultAddress = userData.defaultAddress;
      })
      .addCase(setDefault.fulfilled, (state, action) => {
        state.address.defaultAddress = action.payload;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        const index = getFavIndex(state.address.addresses, action.payload._id);
        state.address.addresses[index] = action.payload;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        const index = getFavIndex(
          state.address.addresses,
          action.payload?.address
        );
        state.address.addresses.splice(index, 1);
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.address.addresses.push(action.payload.address);
      });
  },
});

export const { addToFavorite, removeFromFavorite, resetList, removeFavId } =
  listSlice.actions;

export default listSlice.reducer;
