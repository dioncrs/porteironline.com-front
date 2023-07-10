<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon>
            <AccountBalanceIcon sx={{ fontSize: 26, color: isNameFocused ? "#2196f3" : "#424242" }} />
          </Icon>
          <Typography variant="body2">
            <TextField
              sx={{ minWidth: 328 }}
              id="standard-basic"
              label="Nome da Empresa"
              variant="standard"
              onFocus={() => handleFocus(setNameFocused)}
              onBlur={() => handleBlur(setNameFocused)}
              onChange={handleNameChange}
            />
          </Typography>
        </Box>
        <br />
        <Typography variant="h5" component="div">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon>
              <PlaceTwoToneIcon sx={{ fontSize: 27, color: isCityFocused && isUfFocused ? "#0277bd" : "#424242" }} />
            </Icon>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">UF</InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
                onFocus={() => handleFocus(setUfFocused)}
                onBlur={() => handleBlur(setUfFocused)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Text1</MenuItem>
                <MenuItem value={20}>Teste2</MenuItem>
                <MenuItem value={30}>teste3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-filled-label">Cidade</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                onFocus={() => handleFocus(setCityFocused)}
                onBlur={() => handleBlur(setCityFocused)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Text1</MenuItem>
                <MenuItem value={20}>Teste2</MenuItem>
                <MenuItem value={30}>teste3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Typography>
        <br />
        <br />