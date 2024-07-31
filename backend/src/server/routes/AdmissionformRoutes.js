import { Router } from "express";
import {SubmitForm} from "../controllers/formController.js"

const router = Router();

router.post("/submitform",SubmitForm);

export default router;