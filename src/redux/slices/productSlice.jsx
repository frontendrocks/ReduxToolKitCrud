import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const listProduct = createAsyncThunk("listProduct", async () => {
    const data = await fetch("https://65df5450ff5e305f32a20840.mockapi.io/userCrud");
    return data.json();
});

export const createProduct = createAsyncThunk("createProduct", async (data, { rejectWithValue }) => {
    const response = await fetch("https://65df5450ff5e305f32a20840.mockapi.io/userCrud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://65df5450ff5e305f32a20840.mockapi.io/userCrud/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://65df5450ff5e305f32a20840.mockapi.io/userCrud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        error: false,
        searchData: [],
    },
    reducers: {
    searchProduct: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },
    extraReducers: (builder) => {
        builder.addCase(listProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(listProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(listProduct.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(createProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(deleteProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            const { id } = action.payload;
            if (id) {
                state.data = state.data.filter((ele) => ele.id !== id);
            }
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(updateProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
    }
})

export default productSlice.reducer;
export const { searchProduct } = productSlice.actions;