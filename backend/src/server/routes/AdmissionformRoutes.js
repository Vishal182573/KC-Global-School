import { Router } from "express";
import {getEnquiries, SubmitForm} from "../controllers/formController.js"

const router = Router();

router.post("/submitform",SubmitForm);
router.get("/getEnquiries",getEnquiries);

export default router;