import { useState } from "react";
import {
    Container,
    Box,
    Typography,
    CardMedia,
    InputBase,
    NativeSelect,
} from "@mui/material";
import companiesPageImage from "../../../assets/uiImages/companiesPageImage.png";
import { styled } from "@mui/material/styles";
import digiKala from "../../../assets/uiImages/digiKala.png";
import { BookmarkBorder } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
        borderRadius: 5,
        position: "relative",
        border: "1px solid #8A3592",
        fontSize: 14,
        width: "8rem",
        padding: "12px 16px",
        fontFamily: ["shabnam"].join(","),
    },
}));

const Companies = () => {
    const [age, setAge] = useState("");
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };

    const companies = useSelector(
        (state: any) => state.employersSlice.employers
    );

    return (
        <Container>
            <Box sx={{ paddingX: "3rem" }}>
                <Typography
                    sx={{ marginY: "2rem", fontFamily: "shabnam" }}
                    variant="h4"
                >
                    معرفی شرکت ها
                </Typography>
                <Box>
                    <CardMedia component="img" image={companiesPageImage} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginY: "2rem",
                    }}
                >
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        sx={{ fontFamily: "shabnam" }}
                    >
                        <option value={1}>زمینه فعالیت</option>
                        <option value={20}>برنامه نویسی</option>
                        <option value={30}>سخت افزار</option>
                    </NativeSelect>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        sx={{ fontFamily: "shabnam" }}
                    >
                        <option value={1}>فیلتر</option>
                        <option value={20}>برنامه نویسی</option>
                        <option value={30}>سخت افزار</option>
                    </NativeSelect>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        marginY: "1rem",
                        flexWrap: "wrap",
                        gap: 3,
                        justifyContent: "space-between",
                    }}
                >
                    {companies
                        ? companies.map((item: any) => (
                              <Box
                                  sx={{
                                      width: "30%",
                                  }}
                              >
                                  <Link
                                      style={{
                                          textDecoration: "none",
                                          color: "black",
                                      }}
                                      to={`/companies/${item.company.name}`}
                                  >
                                      <Box
                                          sx={{
                                              padding: "1rem",
                                              display: "flex",
                                              flexDirection: "column",
                                              border: "1px solid #B186E3",
                                              borderRadius: "10px",
                                          }}
                                      >
                                          <Box
                                              sx={{
                                                  display: "flex",
                                                  justifyContent:
                                                      "space-between",
                                              }}
                                          >
                                              <CardMedia
                                                  component="img"
                                                  sx={{ width: "6rem" }}
                                                  image={digiKala}
                                              />
                                              <Box
                                                  sx={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      alignItems: "center",
                                                      justifyContent:
                                                          "space-around",
                                                  }}
                                              >
                                                  <Typography
                                                      sx={{
                                                          fontFamily: "shabnam",
                                                      }}
                                                      variant="subtitle1"
                                                  >
                                                      {item.company
                                                          ? item.company.name
                                                          : ""}{" "}
                                                  </Typography>
                                                  <Typography
                                                      sx={{
                                                          fontFamily: "shabnam",
                                                      }}
                                                      variant="subtitle2"
                                                  >
                                                      استار ریتینگ
                                                  </Typography>
                                              </Box>
                                          </Box>
                                          <Box
                                              sx={{
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  alignItems: "start",
                                              }}
                                          >
                                              <Typography
                                                  sx={{
                                                      fontFamily: "shabnam",
                                                  }}
                                                  variant="h6"
                                              >
                                                  {item.company
                                                      ? item.company.about
                                                      : ""}{" "}
                                              </Typography>
                                              <Typography
                                                  sx={{
                                                      fontFamily: "shabnam",
                                                      color: "gray",
                                                      marginY: "1rem",
                                                  }}
                                                  variant="subtitle2"
                                              >
                                                  {item.company
                                                      ? item.company
                                                            .membersCount
                                                      : ""}{" "}
                                                  کارمند
                                              </Typography>
                                              <Box
                                                  sx={{
                                                      width: "100%",
                                                      display: "flex",
                                                      justifyContent:
                                                          "space-between",
                                                      marginTop: ".5rem",
                                                  }}
                                              >
                                                  <Typography
                                                      sx={{
                                                          fontFamily: "shabnam",
                                                          color: "gray",
                                                      }}
                                                      variant="subtitle2"
                                                  >
                                                      {item.company
                                                          ? item.company.city
                                                          : ""}{" "}
                                                  </Typography>
                                                  <BookmarkBorder
                                                      sx={{
                                                          color: "gray",
                                                      }}
                                                  />
                                              </Box>
                                          </Box>
                                      </Box>
                                  </Link>
                              </Box>
                          ))
                        : "No companies"}
                </Box>
            </Box>
        </Container>
    );
};

export default Companies;
