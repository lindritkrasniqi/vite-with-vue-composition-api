import { createStore } from "vuex";

// import modules
import auth from "~/store/auth";
import errors from "~/store/errors";

export default createStore({ modules: { auth, errors } });
