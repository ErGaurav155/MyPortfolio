import adobeXd from "@/constants/assets/svg/skills/adobe-xd.svg";
import adobeaudition from "@/constants/assets/svg/skills/adobeaudition.svg";
import afterEffects from "@/constants/assets/svg/skills/after-effects.svg";
import angular from "@/constants/assets/svg/skills/angular.svg";
import aws from "@/constants/assets/svg/skills/aws.svg";
import azure from "@/constants/assets/svg/skills/azure.svg";
import blender from "@/constants/assets/svg/skills/blender.svg";
import bootstrap from "@/constants/assets/svg/skills/bootstrap.svg";
import bulma from "@/constants/assets/svg/skills/bulma.svg";
import c from "@/constants/assets/svg/skills/c.svg";
import canva from "@/constants/assets/svg/skills/canva.svg";
import capacitorjs from "@/constants/assets/svg/skills/capacitorjs.svg";
import coffeescript from "@/constants/assets/svg/skills/coffeescript.svg";
import cplusplus from "@/constants/assets/svg/skills/cplusplus.svg";
import csharp from "@/constants/assets/svg/skills/csharp.svg";
import css from "@/constants/assets/svg/skills/css.svg";
import dart from "@/constants/assets/svg/skills/dart.svg";
import deno from "@/constants/assets/svg/skills/deno.svg";
import django from "@/constants/assets/svg/skills/django.svg";
import docker from "@/constants/assets/svg/skills/docker.svg";
import fastify from "@/constants/assets/svg/skills/fastify.svg";
import figma from "@/constants/assets/svg/skills/figma.svg";
import firebase from "@/constants/assets/svg/skills/firebase.svg";
import flutter from "@/constants/assets/svg/skills/flutter.svg";
import gcp from "@/constants/assets/svg/skills/gcp.svg";
import gimp from "@/constants/assets/svg/skills/gimp.svg";
import git from "@/constants/assets/svg/skills/git.svg";
import go from "@/constants/assets/svg/skills/go.svg";
import graphql from "@/constants/assets/svg/skills/graphql.svg";
import haxe from "@/constants/assets/svg/skills/haxe.svg";
import html from "@/constants/assets/svg/skills/html.svg";
import illustrator from "@/constants/assets/svg/skills/illustrator.svg";
import ionic from "@/constants/assets/svg/skills/ionic.svg";
import java from "@/constants/assets/svg/skills/java.svg";
import javascript from "@/constants/assets/svg/skills/javascript.svg";
import julia from "@/constants/assets/svg/skills/julia.svg";
import kotlin from "@/constants/assets/svg/skills/kotlin.svg";
import lightroom from "@/constants/assets/svg/skills/lightroom.svg";
import markdown from "@/constants/assets/svg/skills/markdown.svg";
import materialui from "@/constants/assets/svg/skills/materialui.svg";
import matlab from "@/constants/assets/svg/skills/matlab.svg";
import memsql from "@/constants/assets/svg/skills/memsql.svg";
import microsoftoffice from "@/constants/assets/svg/skills/microsoftoffice.svg";
import mongoDB from "@/constants/assets/svg/skills/mongoDB.svg";
import mysql from "@/constants/assets/svg/skills/mysql.svg";
import nextJS from "@/constants/assets/svg/skills/nextJS.svg";
import nginx from "@/constants/assets/svg/skills/nginx.svg";
import numpy from "@/constants/assets/svg/skills/numpy.svg";
import nuxtJS from "@/constants/assets/svg/skills/nuxtJS.svg";
import opencv from "@/constants/assets/svg/skills/opencv.svg";
import photoshop from "@/constants/assets/svg/skills/photoshop.svg";
import php from "@/constants/assets/svg/skills/php.svg";
import picsart from "@/constants/assets/svg/skills/picsart.svg";
import postgresql from "@/constants/assets/svg/skills/postgresql.svg";
import premierepro from "@/constants/assets/svg/skills/premierepro.svg";
import python from "@/constants/assets/svg/skills/python.svg";
import pytorch from "@/constants/assets/svg/skills/pytorch.svg";
import react from "@/constants/assets/svg/skills/react.svg";
import ruby from "@/constants/assets/svg/skills/ruby.svg";
import selenium from "@/constants/assets/svg/skills/selenium.svg";
import sketch from "@/constants/assets/svg/skills/sketch.svg";
import strapi from "@/constants/assets/svg/skills/strapi.svg";
import svelte from "@/constants/assets/svg/skills/svelte.svg";
import swift from "@/constants/assets/svg/skills/swift.svg";
import tailwind from "@/constants/assets/svg/skills/tailwind.svg";
import tensorflow from "@/constants/assets/svg/skills/tensorflow.svg";
import typescript from "@/constants/assets/svg/skills/typescript.svg";
import unity from "@/constants/assets/svg/skills/unity.svg";
import vitejs from "@/constants/assets/svg/skills/vitejs.svg";
import vue from "@/constants/assets/svg/skills/vue.svg";
import vuetifyjs from "@/constants/assets/svg/skills/vuetifyjs.svg";
import webix from "@/constants/assets/svg/skills/webix.svg";
import wolframalpha from "@/constants/assets/svg/skills/wolframalpha.svg";
import wordpress from "@/constants/assets/svg/skills/wordpress.svg";

import pandas from "@/constants/assets/svg/skills/pandas.svg";
import scikitlearn from "@/constants/assets/svg/skills/scikit-learn.svg";
import dotnet from "@/constants/assets/svg/skills/dotnet.svg";
import dotnetcore from "@/constants/assets/svg/skills/dotnetcore.svg";
import kubernetes from "@/constants/assets/svg/skills/kubernetes.svg";
import linux from "@/constants/assets/svg/skills/linux.svg";
import sqlalchemy from "@/constants/assets/svg/skills/sqlalchemy.svg";
import fastapi from "@/constants/assets/svg/skills/fastapi.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    case "pandas":
      return pandas;
    case "sklearn":
      return scikitlearn;
    case ".net":
      return dotnet;
    case ".net core":
      return dotnetcore;
    case "kubernetes":
      return kubernetes;
    case "linux":
      return linux;
    case "sqlalchemy":
      return sqlalchemy;
    case "fastapi":
      return fastapi;
    default:
      break;
  }
};
