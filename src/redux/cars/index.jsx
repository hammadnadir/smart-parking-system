import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
import request from "../request";

const initialState = {
  parkCars: [],
  carById: {},
  addCar: {},
  removeCar: {},
  editCarNo: {},
  loading: false,
  error: "",
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async (_, thunkAPI) => {
  const response = await request.get("slot").then((response) => response.data.data);
  return response;
});

export const addParkCar = createAsyncThunk("car/addParkCar", async (payload, thunkAPI) => {
  const response = await request.post(`slot`, payload).then((response) => response.data);
  // await thunkAPI.fetchCars();
  return response;
});

export const removeParkCar = createAsyncThunk("car/removeParkCar", async (payload, thunkAPI) => {
    const response = await request.delete(`slot/${payload._id}`,payload)
    console.log(`slot/${payload._id}`)
    const state = thunkAPI.getState()
    console.log(state)
    const filtered = state.cars.parkCars.filter((data)=>data.id !== payload._id)
    await thunkAPI.dispatch(setBrandFilter(filtered))
    return response;
});

export const editParkCar = createAsyncThunk("car/editParkCar", async (payload, thunkAPI) => {
  const response = await request.put(`slot/${payload.id}`,payload)
  return response;
});

export const fetchCarById = createAsyncThunk("car/fetchCarById", async (payload, thunkAPI) => {
  const  response = await request.get(`slot/${payload._id}`).then((response) => response.data);
  return response;
});

const carSlice = createSlice({
  name: "parkCars",
  initialState,
  reducers: {
    setBrandFilter: (state, action) => {
      state.parkCars = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(HYDRATE, (state, action) => {
    //   //console.log("HYDRATE", action.payload);
    //   state.parkCars = action?.payload?.parkCars?.parkCars?.data?.length > 0 ? action.payload.parkCars.parkCars : state.parkCars;
    // });

    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.parkCars = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.parkCars = [];
    });

    builder.addCase(addParkCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addParkCar.fulfilled, (state, action) => {
      state.loading = false;
      state.addCar = action.payload;
      state.parkCars = [...state.parkCars,action.payload ]
      state.error = "";
    });
    builder.addCase(addParkCar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.addCar = {};
    });

    builder.addCase(removeParkCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeParkCar.fulfilled, (state, action) => {
      state.loading = false;
      state.removeCar = action.payload;
      state.error = "";
    });
    builder.addCase(removeParkCar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.removeCar = {};
    });


    builder.addCase(editParkCar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editParkCar.fulfilled, (state, action) => {
      state.loading = false;
      state.editCarNo = action.payload;
      state.error = "";
    });
    builder.addCase(editParkCar.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.editCarNo = {};
    });

    
    builder.addCase(fetchCarById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCarById.fulfilled, (state, action) => {
      state.loading = false;
      state.carById = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCarById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.carById = {};
    });

  },
});

export const { setBrandFilter } = carSlice.actions;

export default carSlice.reducer;
