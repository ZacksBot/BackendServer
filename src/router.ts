import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputsErrors } from "./modules/middleware";

const router = Router();
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", (req, res) => {});

router.post("/product", body("name"), handleInputsErrors, (req, res) => {});

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputsErrors,
  (req, res) => {}
);

router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post(
  "/update",
  body("title").exists(),
  body("body").exists().isString(),
  (req, res) => {}
);

router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  (req, res) => {}
);

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateID").exists().isString(),
  (req, res) => {}
);

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
