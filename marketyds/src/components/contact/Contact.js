import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import FeatherIcon from "feather-icons-react";
import "../../assets/css/main.css"
import "../../assets/css/util.css"
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../assets/img/river.jpg";
import Alert, {msjConfirmacion, msjError, msjExito, titleConfirmacion, titleError, titleExito} from "../../shared/plugins/alert";