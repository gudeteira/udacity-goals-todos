import {applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import checker from "./checker"
import logger from "./logger"

applyMiddleware(thunk, checker, logger);