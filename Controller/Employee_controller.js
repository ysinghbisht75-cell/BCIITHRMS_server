let emp_data = require("../Model/empSchema");
let PostEmployeeApi = async (req, res) => {
  let {
    empId,
    empName,
    empEmail,
    empPhone,
    empDateOfBirth,
    empAddress,
    empJoiningDate,
    empDepartment,
    empDesignation,
  } = req.body;
  try {
    let data = await emp_data({
      empId,
      empName,
      empEmail,
      empPhone,
      empDateOfBirth,
      empAddress,
      empJoiningDate,
      empDepartment,
      empDesignation,
    }).save();
    return res
      .status(201)
      .json({ success: true, message: "Employee addded successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
let Login = async (req, res) => {
  let { name, email } = req.body;
  try {
    let existing_emp = await emp_data.findOne({ email: email });
    if (!emp) {
      return res.status(404).json({ status: false, message: "Emp not found" });
    }
    let matched_email = await bcrypt.compare(password, existing_user.password);
    if (!matched_password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    let token = jwt.sign({ email: existing_user.email }, SECRET_KEY);
    if (existing_user)
      return res
        .status(200)
        .json({ success: true, message: "Login successfully", token: token });
  } catch (error) {}
};
let getEmployeeApi = async (req, res) => {
  try {
    let data = await emp_data.find();
    return res
      .status(200)
      .json({ success: true, message: "Data get successfully ", data: data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
let UpdateEmployeeApi = async (req, res) => {
  console.log(req.body);
  console.log(req.files.empImage[0].filename);

  let empImage = req.files.empImage[0].filename;

  let {
    empId,
    empName,
    empEmail,
    empPhone,
    empDateOfBirth,
    empAddress,
    empJoiningDate,
    empDepartment,
    empDesignation,
  } = req.body;
  try {
    let existing_emp = await emp_data.findOne({ empEmail: empEmail });
    if (!existing_emp) {
      return res.status(404).json({ success: false, message: "Emp not found" });
    }

    if (req.files) {
      let update_employee_image = await emp_data.updateOne(
        { empEmail: empEmail },
        {
          $set: {
            empImage: empImage,
          },
        },
      );
      res
        .status(200)
        .json({ success: true, message: "Image updated successfully" });
    }
    let update_emp = await emp_data.updateOne(
      { empEmail: empEmail },
      {
        $set: {
          empId: empId,
          empName: empName,
          empEmail: empEmail,
          empPhone: empPhone,
          empDateOfBirth: empDateOfBirth,
          empAddress: empAddress,
          empJoiningDate: empJoiningDate,
          empDepartment: empDepartment,
          empDesignation: empDesignation,
        },
      },
    );
    return res
      .status(200)
      .json({ success: true, message: "record updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
let UpdateEmployeeApiByID = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  let { id } = req.params;
  let {
    empId,
    empName,
    empEmail,
    empPhone,
    empDateOfBirth,
    empAddress,
    empJoiningDate,
    empDepartment,
    empDesignation,
  } = req.body;

  try {
    let update_employee = await emp_data.findByIdAndUpdate(id, {
      empId: empId,
      empName: empName,
      empEmail: empEmail,
      empPhone: empPhone,
      empDateOfBirth: empDateOfBirth,
      empAddress: empAddress,
      empJoiningDate: empJoiningDate,
      empDepartment: empDepartment,
      empDesignation: empDesignation,
    });

    if (!update_employee) {
      return res
        .status(404)
        .json({ success: false, message: "Record not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Data updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
let DeleteEmployeeApiByID = async (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  try {
    const delete_employee = await emp_data.findByIdAndDelete(id);

    if (!delete_employee) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data Deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  PostEmployeeApi,
  getEmployeeApi,
  UpdateEmployeeApi,
  UpdateEmployeeApiByID,
  DeleteEmployeeApiByID,
};
