import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';

import {
  Avatar,
  CircularProgress,
  InputAdornment,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import fetchCryptoReports, {
  FetchCryptoReportsResult,
} from '@/services/fetchCryptoReports';
import normalizePath from '@/utils/normalizePath';

const ReportsSearch = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<FetchCryptoReportsResult[]>([]);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetch = debounce(async (input: string) => {
    if (input.length > 0) {
      setIsLoading(true);
      const results = await fetchCryptoReports(input, 300);
      setOptions(results);
      setIsLoading(false);
    } else {
      setOptions([]);
    }
  }, 200);

  useEffect(() => {
    debouncedFetch(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <Autocomplete
      style={{ width: 300 }}
      open={open}
      loading={isLoading}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => `${option.name} (${option.symbol})`}
      options={options}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        newValue?.name &&
          router.push(`/reports/${normalizePath(newValue?.name)}`);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="Enter asset name"
          placeholder="Provide asset name"
          inputProps={{
            ...params.inputProps,
            'aria-label': 'Enter asset name',
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: isLoading ? (
              <CircularProgress
                size={20}
                style={{ position: 'relative', left: 30 }}
              />
            ) : null,
          }}
        />
      )}
      renderOption={(props, option) => (
        <ListItem {...props}>
          <Avatar
            src={`/icons/color/${option.symbol}.svg`.toLowerCase()}
            alt={option.name}
            sx={{ width: 24, height: 24, marginRight: 2 }}
          />
          <ListItemText primary={`${option.name} (${option.symbol})`} />
        </ListItem>
      )}
    />
  );
};

export default ReportsSearch;
