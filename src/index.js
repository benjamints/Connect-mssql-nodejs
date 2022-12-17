const { sql, poolPromise } = require("./databases/mssql.database");

const queryExample1 = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.query("SELECT * FROM dbo.KHACHHANG");

    for (let khach of result.recordsets) {
      console.table(khach);
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

const queryExample2 = async (ma_khachhang) => {
  try {
    console.log("ma_khachhang###", ma_khachhang);
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("makh", ma_khachhang)
      .query("SELECT * FROM dbo.KHACHHANG kh where kh.MAKH = @makh");

    for (let khachang of result.recordsets) console.table(khachang);

    return result;
  } catch (err) {
    console.error(err);
  }
};

// queryExample1();
queryExample2("001");
