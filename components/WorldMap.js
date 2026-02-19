'use client';

import React, { useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';


const geoUrl = "/world-110m.json";

const highlightedCountries = [
    "United States of America",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Australia",
    "Singapore",
    "Japan"
];

const markers = [
    { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
    { markerOffset: -15, name: "London", coordinates: [-0.1276, 51.5074] },
    { markerOffset: -15, name: "Dubai", coordinates: [55.2708, 25.2048] },
    { markerOffset: 25, name: "Singapore", coordinates: [103.8198, 1.3521] },
    { markerOffset: -15, name: "Sydney", coordinates: [151.2093, -33.8688] },
];

const WorldMap = () => {
    return (
        <div style={{
            width: '100%', height: '100%', minHeight: '400px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '12px', overflow: 'hidden', position: 'relative',
        }}>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 140,
                    center: [20, 10]
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted = highlightedCountries.includes(geo.properties.name);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isHighlighted ? "#fbbf24" : "#2d3748"}
                                    stroke="#4a5568"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: {
                                            fill: isHighlighted ? "#f59e0b" : "#4a5568",
                                            outline: "none"
                                        },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>

                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={4} fill="#fbbf24" stroke="#fff" strokeWidth={2} />
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "system-ui", fill: "#fbbf24", fontSize: "10px", fontWeight: "bold" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>

            {/* Legend */}
            <div style={{
                position: 'absolute', bottom: '16px', left: '16px',
                background: 'rgba(15, 25, 35, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '10px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(251, 191, 36, 0.2)',
                display: 'flex', alignItems: 'center', gap: '10px',
                pointerEvents: 'none',
            }}>
                <span style={{
                    width: '10px', height: '10px',
                    background: '#fbbf24',
                    borderRadius: '50%',
                    display: 'inline-block',
                    boxShadow: '0 0 8px rgba(251, 191, 36, 0.5)',
                }}></span>
                <span style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                }}>Export Destinations</span>
            </div>
        </div>
    );
};

export default WorldMap;
