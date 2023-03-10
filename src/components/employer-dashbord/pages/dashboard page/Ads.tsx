import {
    Box,
    Typography,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

const Ads = () => {
    const ads = useSelector((state: any) => state.adsSlice.ads);
    const currentEmployerId = useSelector(
        (state: any) => state.employersSlice.currentEmployer.id
    );

    const employerAds = ads.filter(
        (item: any) => item.employerId === currentEmployerId
    );

    console.log(employerAds);

    return (
        <Box
            sx={{
                display: "flex",
                width: "50%",
                flexDirection: "column",
                marginRight: "26rem",
                position: "absolute",
                bgcolor: "#FCFCFC",
                paddingBlock: "1.5rem",
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                    sx={{
                        fontFamily: "shabnam",
                        fontSize: "20px",
                        fontWeight: 500,
                    }}
                >
                    آگهی ها
                </Typography>
                <FormControl
                    sx={{
                        m: 1,
                        minWidth: 120,
                        bgcolor: "#C542D0",
                        borderRadius: "0.5rem",
                        outline: "none",
                    }}
                    size="small"
                >
                    <InputLabel
                        sx={{
                            fontFamily: "shabnam",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "white",
                        }}
                    >
                        همه
                    </InputLabel>
                    {/* //BUG for SELECT */}
                    <Select>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "shabnam",
                                fontSize: "14px",
                                fontWeight: 500,
                            }}
                        >
                            منتشرشده
                        </MenuItem>
                        <MenuItem
                            sx={{
                                fontFamily: "shabnam",
                                fontSize: "14px",
                                fontWeight: 500,
                            }}
                        >
                            ردشده
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                {employerAds
                    ? employerAds.map((item: any) => (
                          <Box
                              sx={{
                                  marginY: "2rem",
                                  border: "1px solid orange",
                              }}
                          >
                              <Box
                                  sx={{
                                      display: "flex",
                                      gap: 2,
                                      position: "relative",
                                      justifyContent: "space-between",
                                  }}
                              >
                                  <Typography
                                      sx={{
                                          fontFamily: "shabnam",
                                          fontWeight: 500,
                                      }}
                                  >
                                      {item.adsInfo}
                                  </Typography>
                                  <Box
                                      sx={{
                                          bgcolor: "#CFFCC4",
                                          width: "88px",
                                          height: "44px",
                                          borderRadius: "10px",
                                          position: "absolute",
                                          marginRight: "9rem",
                                      }}
                                  >
                                      <Typography
                                          variant="body1"
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#959191",
                                              alignItems: "center",
                                              marginTop: 1,
                                              marginRight: 1,
                                          }}
                                      >
                                          {item.isShow
                                              ? "منتشر شده"
                                              : "منتشر نشده"}
                                      </Typography>
                                  </Box>
                                  <Box sx={{ display: "flex" }}>
                                      <EditIcon sx={{ color: "#5B5757" }} />
                                      <Typography
                                          variant="body1"
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                              marginTop: 1,
                                              marginRight: 1,
                                          }}
                                      >
                                          ویرایش
                                      </Typography>
                                  </Box>
                              </Box>
                              <Divider sx={{ paddingBlock: "1rem" }} />
                              <Box
                                  sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                  }}
                              >
                                  {/*  */}
                                  <Box
                                      sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          textAlign: "center",
                                          marginTop: "1rem",
                                      }}
                                  >
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          53
                                      </Typography>
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          متقاضی بررسی نشده
                                      </Typography>
                                  </Box>
                                  {/*  */}
                                  <Box
                                      sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          textAlign: "center",
                                          marginTop: "1rem",
                                      }}
                                  >
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          0
                                      </Typography>
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          متقاضی بررسی شده
                                      </Typography>
                                  </Box>
                                  {/*  */}
                                  <Box
                                      sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          textAlign: "center",
                                          marginTop: "1rem",
                                      }}
                                  >
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          1
                                      </Typography>
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          تایید برای مصاحبه
                                      </Typography>
                                  </Box>
                                  {/*  */}
                                  <Box
                                      sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                          textAlign: "center",
                                          marginTop: "1rem",
                                      }}
                                  >
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          0
                                      </Typography>
                                      <Typography
                                          sx={{
                                              fontFamily: "shabnam",
                                              fontWeight: 300,
                                              fontSize: "15px",
                                              color: "#000000",
                                              alignItems: "center",
                                          }}
                                      >
                                          استخدام شده
                                      </Typography>
                                  </Box>
                              </Box>
                          </Box>
                      ))
                    : ""}
            </Box>
        </Box>
    );
};

export default Ads;
