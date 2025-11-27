MyMaple API – README
====================

Overview
--------
This project implements the backend for the MyMaple freeze–thaw prediction and
environmental data API. It combines FastAPI, Google Earth Engine, SMAP,
ERA5-Land, Open-Meteo, and geocoding services to calculate freeze–thaw windows
and environmental indices for maple tapping.

File Summaries
--------------

api.py
------
Main FastAPI application. Handles:
- Freeze–thaw prediction endpoint
- LST, soil moisture, and pressure data normalization
- SMS sending via Twilio
- Location → coordinate lookup
- Computes combined index for choosing optimal tapping day
(Uses functions from other modules.)

lst_data.py
-----------
Fetches and normalizes MODIS Land Surface Temperature using Google Earth Engine.
Performs:
- LST extraction (day/night)
- Two-year historical climatology
- Predicted and normalized LST series

PressureData.py
---------------
Fetches ERA5-Land daily atmospheric pressure for the past 5 years via GEE and
predicts future pressure using weighted lag-based modeling. Returns normalized
pressure scores useful for sap flow modeling.

SeasonalPlanningAlerts.py
-------------------------
Uses Open-Meteo API to compute freeze–thaw windows from historical temperature
cycles. Predicts the expected future freeze–thaw period based on multi-year
median patterns.

SoilMoistureData.py
-------------------
Fetches and normalizes SMAP L4 soil moisture data using GEE. Provides:
- Historical SMAP soil moisture retrieval
- Weighted temporal lag prediction
- Normalized future soil moisture scores

utils.py
--------
Provides helper utilities such as geocoding:
- Converts address → (lat, lon) using Nominatim.

smap_ontario.html
-----------------
Static folium/Leaflet map visualization of SMAP soil moisture tiles, used for
debugging and geographic verification.

requirements.txt
----------------
List of required Python dependencies for running the project
(pandas, numpy, Earth Engine API, geopy, matplotlib, fastapi, twilio, etc.).

.gitignore
----------
Standard ignore list for Python projects (virtual env, pycache, IDE files).

