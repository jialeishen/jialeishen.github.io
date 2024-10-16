---
layout: page
title: CONTAM in ANT
description: ANT is the CONTAM plug-in on Rhino Grasshopper for multizone indoor air quality and ventilation analysis.
img: assets/img/contamant2.png
importance: 1
category: software
related_publications: true
---


ANT is a multizone indoor air quality (IAQ) and ventilation analysis plug-in on Grasshopper. ANT integrates the functions of programs in CONTAM family, including CONTAMW, CONTAM Weather File Creator, CONTAM Particle Distribution Calculator, FaTIMA, ContamFactorial, CONTAM Results Viewer, and CONTAM Results Export Tool, which allows ANT to perform analyses of

 - multizone airflow and contaminant transport,
 - occupant exposure to indoor contaminants,
 - estimation of transmission and infection risk of respiratory diseases, and
 - visualization of contaminant and exposure modellings.

CONTAM is a program (family) developed by NIST to accomplish multizone IAQ and ventilation analyses. ContamP and ContamX APIs were used in ANT to develop GH components to create CONTAM project elements (such as zones, paths, air handling system, and occupancy), generate project files (.prj) and run simulations. The original CONTAM and associated tools can be found on NIST website and a Python wrapper for ContamX (CONTAM simulation engine) is available on PyPI.

The name "ANT" originates from "contaminant" (or "contam-in-ant"). It implies the link between CONTAM and ANT, and also embodies the mission of ANT. Besides the regular functions of CONTAM, the highlighted features of ANT mainly include

 - capability of establishing 3D building models for CONTAM analyses (compared to the conventional way of drawing 2D sketches on CONTAMW),
 - simplified approaches on creating CONTAM zones and paths,
 - access to U.S. EPA's Air Quality System (AQS) database to generate ambient contaminant files (.ctm) for typical atmospheric contaminants in U.S. cities,
 - capability of parametric analysis,
 - estimation of contaminant exposures and disability-adjusted life years (DALYs),
 - calculation of multizone airborne transmission and infection estimation for respiratory diseases (e.g. COVID-19), and
 - visualization of contaminant and exposure calculations through plots, contours, and animations.

ANT is free on [Food4Rhino](https://www.food4rhino.com/en/app/ant).